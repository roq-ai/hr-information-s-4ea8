import * as yup from 'yup';

export const payrollValidationSchema = yup.object().shape({
  salary: yup.number().integer().required(),
  bonus: yup.number().integer(),
  deductions: yup.number().integer(),
  employee_id: yup.string().nullable(),
});
