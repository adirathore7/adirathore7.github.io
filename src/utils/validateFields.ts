
export const userValidation = (state: any, setErrors: (errors: Record<string, string>) => void) => {
    const newErrors: Record<string, string> = {};

    // User profile validation
    if (!state.name?.trim()) {
      newErrors.name = "Name cannot be empty";
    }

    if (!state.email?.trim()) {
      newErrors.email = "Email cannot be empty";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(state.email)) {
        newErrors.email = "Invalid email format";
      }
    }

    if (!state.phoneNumber?.trim()) {
      newErrors.phoneNumber = "Phone number cannot be empty";
    }

    if (!state.address?.trim()) {
      newErrors.address = "Address cannot be empty";
    }

    if (state.password) {
        if (!state.password?.trim()) {
            newErrors.password = "Password cannot be empty";
        } else {
            if (state.password.length < 7) {
            newErrors.password = "Password must be at least 7 characters long";
            }
    
            if (!/[a-z]/.test(state.password)) {
                newErrors.password = "Password must contain at least one lowercase letter";
            }
            
            if (!/[0-9]/.test(state.password)) {
                newErrors.password = "Password must contain at least one number";
            }
    
            // if (!/[A-Z]/.test(state.password)) {
            // newErrors.password = "Password must contain at least one uppercase letter";
            // }
        }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
};

export const paymentValidation = (state: any, setErrors: (errors: Record<string, string>) => void) => {
    const newErrors: Record<string, string> = {};

    // Payment form validation
    if (!state.recipient.trim()) {
      newErrors.recipient = "Recipient name cannot be empty";
    }

    if (!state.fromAccountId) {
      newErrors.fromAccountId = "Choose one option from the list";
    }

    if (!state.paymentType) {
      newErrors.paymentType = "Choose one option from the list";
    }

    if (!state.amount.trim()) {
      newErrors.amount = "Amount cannot be empty";
    }

    if (!state.paymentDate.trim()) {
      newErrors.paymentDate = "Payment date cannot be empty";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
}