import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from './FormFields';

import history from './history';
import OrderSummary from './TripSummary';

class PaymentForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
  
        return (
            <form onSubmit={handleSubmit} className={`${className} payment-form`}>
                <Field className='payment-form__name'
                type='name'
                title='Lipa Na Mpesa'
                placeholder='Enter phone number'
                name='name'
                component={FormInput}/>
                 <Field className='payment-form__card'
                type='card'
                title='Enter Mpesa PIN'
                placeholder='____-____-____-____'
                name='card'
                component={FormInput}/>

                <Field className='payment-form__expiration'
                type='expiration'
                title='Are you sure?'
                placeholder='type yes to confirm'
                name='expiration'
                component={FormInput}/>
                <Field className='payment-form__ccv'
                type='ccv'
                title='Pay to'
                placeholder='Kijani Bikes'
                name='ccv'
                component={FormInput}/>

                <div className='payment-form__line'></div>
                <Field className='payment-form__pay-complete'
                onClick={() => history.push('/information/payment')}
                type='submit'
                title='Pay & Complete'
                name='pay-complete'
                component={FormButton}/>
                <Field className='payment-form__back'
                onClick={() => history.push('/signin')}
                type='button'
                title='Back'
                name='back'
                short={true}
                component={FormButton}/>
                <OrderSummary className='payment-form__order-summary'/>
            </form>
        )
    }
}

PaymentForm = reduxForm({
    form: 'PaymentForm'
})(PaymentForm);

export default PaymentForm;