interface ValidationErrors {
  name?: string;
  mail?: string;
  amount?: string;
  paymentMethod?: string;
}

export default function validation({
  name,
  mail,
  amount,
  paymentMethod,
}: {
  name: any;
  mail: any;
  amount: any;
  paymentMethod: any;
}) {
  const errors: ValidationErrors = {};

  if (!name) {
    errors.name = "Name is required.";
  } else if (!isValidName(name)) {
    errors.name = "Name can only contain letters and spaces.";
  }

  if (!mail) {
    errors.mail = "Email is required.";
  } else if (!isValidEmail(mail)) {
    errors.mail = "Invalid email format.";
  }

  if (isNaN(amount) || amount <= 0) {
    errors.amount = "Amount must be a positive number.";
  }

  if (!paymentMethod) {
    errors.paymentMethod = "Payment method is required.";
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  return true;
}

const isValidName = (name: string) => {
  const regex = /^[a-zA-Z\s]*$/;
  return regex.test(name);
};

const isValidEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};
