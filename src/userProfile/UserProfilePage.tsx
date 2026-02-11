import { useEffect, useState, useReducer, type ChangeEvent, type FormEvent } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import { fetchUserInfo } from '../services/user.service';
import type { User } from '../types/user';
import { initialUserState, userReducer } from './profileReducer';
import { userValidation } from '../utils/validateFields';
import { formatPhoneNumber } from '../utils/phoneNumberFormat';
import { useSearchParams } from 'react-router-dom';
import './profile.css';

export default function UserProfilePage() {
    const [loading, setLoading] = useState(true);
    const [form, dispatch] = useReducer(userReducer, initialUserState);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [success, setSuccess] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [params] = useSearchParams();
    const editable = params.get("editable") === "true";

    useEffect(() => {
        async function loadUserInfo() {
            try {
                const data = await fetchUserInfo();
                dispatch({ type: "LOAD", payload: data });
            } catch (error) {
                console.error("Error fetching user info:", error);
            } finally {
                setLoading(false);
            }
        }
        loadUserInfo();
    }, []);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        // prevent whitespace-only values
        const cleanedValue = value.trim() === "" ? "" : value;

        dispatch({ type: "SET_FIELD", field: name as keyof User, value: cleanedValue });
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const handleSave = (e: FormEvent) => {
        e.preventDefault();

        if (!editable) return;
        const isValid = userValidation(form.draft, setErrors);
        if (!isValid) return;

        dispatch({ type: "SAVE_DRAFT", payload: form.draft });
        setSuccess(true);

        setTimeout(() => {
            setSuccess(false);
        }, 5000);
    }

    const clearForm = () => {
        dispatch({ type: "CANCEL" });
        setSuccess(false);
        setErrors({});
    }
    
    return (
        <section className="profile-container">
            <header>
                <h1 className='gradient-text' style={editable ? {marginBottom: 0} : {}}>User Profile</h1>
                {editable && 
                  <p style={{ color: "#6b7280", marginTop: 0, marginBottom: 24 }}>
                    You are in edit mode. Make changes and click Save.
                  </p>
                }
            </header>

            {!loading
                ? (
                    <div className='card'>
                        <form onSubmit={handleSave} onReset={clearForm} className="form-section">
                              <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input id="name"
                                  name="name"
                                  type="text"
                                  value={form.draft.name}
                                  onChange={handleChange}
                                  readOnly={!editable}
                                />
                                {errors.name && <p className="error">{errors.name}</p>}
                              </div>
                              <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input id="email"
                                  name="email"
                                  type="email"
                                  value={form.draft.email}
                                  onChange={handleChange}
                                  readOnly={!editable}
                                />
                                {errors.email && <p className="error">{errors.email}</p>}
                              </div>
                              <div className="password-wrapper form-group">
                                <label htmlFor="password">Password</label>
                                <input id="password"
                                  name="password"
                                  type={showPassword ? "text" : "password"}
                                  value={form.draft.password}
                                  onChange={handleChange}
                                  readOnly={!editable}
                                />
                                <button className='toggle-password' onClick={togglePasswordVisibility}>
                                  {showPassword ? "Hide" : "Show"}
                                </button>
                                {errors.password && <p className="error">{errors.password}</p>}
                              </div>
                              <div className="form-group">
                                <label htmlFor="phoneNumber">Phone number</label>
                                <input id="phoneNumber"
                                  name="phoneNumber"
                                  type="tel"
                                  value={formatPhoneNumber(form.draft.phoneNumber)}
                                  onChange={handleChange}
                                  readOnly={!editable}
                                />
                                {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
                              </div>
                              <div className="form-group">
                                <label htmlFor="address">Address</label>
                                <input id="address"
                                  name="address"
                                  type="text"
                                  value={form.draft.address}
                                  onChange={handleChange}
                                  readOnly={!editable}
                                />
                                {errors.address && <p className="error">{errors.address}</p>}
                              </div>
                              <div className="form-group">
                                <label htmlFor="accounts">Active accounts</label>
                                <div className="pill-container">
                                    {form.draft.accounts.map((acc) => (
                                    <span key={acc} className="pill">
                                        {acc}
                                    </span>
                                    ))}
                                </div>
                              </div>
                        
                              <div className="form-buttons">
                                <button className="button-primary" type="submit" disabled={!editable}>
                                  Save
                                </button>
                        
                                <button className="button-secondary" type="reset" disabled={!editable}>
                                  Cancel
                                </button>
                              </div>
                        
                              {success && (
                                <p style={{ marginTop: 12, color: "#065f46" }}>
                                  User information updated successfully.
                                </p>
                              )}
                            </form>
                    </div>
                )
                : (<LoadingSpinner />)
            }
        </section>
    );
}