import { withFormik } from 'formik'
import * as Yup from 'yup'
import moment from 'moment'

const handleSubmit = (values, { props: { submit } }) => {
  submit({ values })
}

const mapPropsToValues = ({ user }) => {
  return {
    id: user.id ? user.id : null,
    name: user.name ? user.name : '',
    surname: user.surname ? user.surname : '',
    email: user.email ? user.email : '',
    phone: user.phone ? user.phone : '',
    username: user.username ? user.username : '',
    password: null,
    passwordreplace: null,
    deleted: user.deleted ? user.deleted : false,
    enabled: user.enabled ? user.enabled : true,
    createdat: user.createdat ? moment(user.createdat) : moment(),
  }
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Campo obrigatório.'),
  surname: Yup.string().required('Campo obrigatório.'),
  email: Yup.string()
    .email('E-mail inválido.')
    .required('Campo obrigatório.'),
  phone: Yup.string()
    .min(10, 'Número incompleto.')
    .max(10)
    .required('Campo obrigatório.'),
  username: Yup.string()
    .min(6, 'Deve ter mais de 6 caracteres.')
    .max(15, 'Deve ter no máximo 15 caracteres.')
    .required('Campo obrigatório.'),
  password: Yup.string()
    .nullable()
    .test('ispassword', 'Campo obrigatório.', 
      function(password) {
        const { id } = this.parent
        if (!id && !password) {
          this.createError({ path: 'password', message: 'Campo obrigatório.' })
          return false
        }
        return true
      }
    )
    .test('ispassword1', 'Deve ter mais de 3 caracteres.', 
      function(password) {
        if (password && password.length < 3) {
          return false
        }
        return true
      }
    ),
  passwordreplace: Yup.string()
    .nullable()
    .test('ispasswordreplace', 'Campo obrigatório.',
      function(passwordreplace) {
        const { id } = this.parent
        if (!id && !passwordreplace) {
          return false
        }
        return true
      }
    )
    .test('ispasswordreplace1', 'Senhas diferentes.',
      function(passwordreplace) {
        const { password } = this.parent
        if (password && password !== passwordreplace) {
          return false
        }
        return true
      }
    ),
})

export default withFormik({
  handleSubmit,
  mapPropsToValues,
  validationSchema,
})