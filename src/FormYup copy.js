import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';



const Form = () => {    
    
    return (
        <Formik 
            initialValues= { 
            { name: '',
                email: '',
                amount: 0,
                currency: '',
                text: '',
                terms: false }}

            validationSchema = {Yup.object({
                name: Yup.string()
                            .min(2, "Минимум 2 символа yup")
                            .required('Обязательное поле'),
                email: Yup.string()
                            .email('Неправильный email yup')
                            .required('Обязательное поле'),
                amount: Yup.number()
                            .min(5,"Не менее 5")
                            .required("Обязатльное поле"),
                currency: Yup.string().required("Выберите валюту"),
                text: Yup.string()
                            .min(10),
                terms: Yup.boolean()
                            .required('Необходимо согласие')
                            .oneOf([true], 'Необходимо согласие')
            })}

            onSubmit= {values => console.log(JSON.stringify(values,null,2))}  
        >
            <Form className="form" onSubmit={formik.handleSubmit}>
                <h2>Отправить пожертвование</h2>
                <label htmlFor="name">Ваше имя</label>
                <Field
                    id="name"
                    name="name"
                    type="text"
                   
                />
               <ErrorMessage className="error" name="name" component="div"/>
                
                <label htmlFor="email">Ваша почта</label>
                <Field
                    id="email"
                    name="email" //
                    type="email"
                    
                />
                <ErrorMessage className="error" name="email" component="div"/>
                
                <label htmlFor="amount">Количество</label>
                <Field
                    id="amount"
                    name="amount"
                    type="number"
                   
                />
                <ErrorMessage className="error" name="name" component="div"/>
                
                <label htmlFor="currency">Валюта</label>
                <select
                    id="currency"
                    name="currency"
                    value={formik.values.currency}
                    onChange={formik.handleChange}>
                        <option value="">Выберите валюту</option>
                        <option value="USD">USD</option>
                        <option value="UAH">UAH</option>
                        <option value="RUB">RUB</option>
                </select>
                {formik.errors.currency && formik.touched.currency ? <div className="error">{formik.errors.currency}</div> : null }
                <label htmlFor="text">Ваше сообщение</label>
                <textarea 
                    id="text"
                    name="text"
                    value={formik.values.text}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.errors.text && formik.touched.text ?  <div className="error">{formik.errors.text}</div> : null }    
                <label className="checkbox">
                    <input 
                        name="terms" 
                        type="checkbox" 
                        value={formik.values.terms}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    Соглашаетесь с политикой конфиденциальности?
                </label>
                {formik.errors.terms && formik.touched.terms ? <div className="error">{formik.errors.terms}</div> : null }        
                <button type="submit">Отправить</button>
             </Form>
        </Formik>
    )
}

export default Form;