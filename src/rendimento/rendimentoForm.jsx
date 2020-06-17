import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { init } from './rendimentoActions'
import LabelAndInput from '../common/form/labelAndInput'
import ItemList from './itemList'
import Summary from './summary'

class RendimentoForm extends Component {

    calculateSummary() {
        const sum = (t, v) => t + v
        return {
            sumOfCredits: this.props.credito.map(c => +c.value || 0).reduce(sum),
            sumOfDebts: this.props.debito.map(d => +d.value || 0).reduce(sum)
        }
    }

    render() {
        const { handleSubmit, readOnly, credito, debito } = this.props
        const { sumOfCredits, sumOfDebts } = this.calculateSummary()
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={LabelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 4' placeholder='Informe o nome' />
                    <Field name='month' component={LabelAndInput} type='number' readOnly={readOnly}
                        label='Mês' cols='12 4' placeholder='Informe o mês' />
                    <Field name='year' component={LabelAndInput} type='number' readOnly={readOnly}
                        label='Ano' cols='12 4' placeholder='Informe o ano' />
                    <Summary credito={sumOfCredits} debito={sumOfDebts} />
                    <ItemList cols='12 8' list={credito} readOnly={readOnly}
                        field='credito' legend='Créditos' />
                    <ItemList cols='12 12' list={debito} readOnly={readOnly}
                        field='debito' legend='Débitos' showStatus={true} showCategory={true} />
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

RendimentoForm = reduxForm({form: 'rendimentoForm', destroyOnUnmount: false})(RendimentoForm)
const selector = formValueSelector('rendimentoForm')
const mapStateToProps = state => ({
    credito: selector(state, 'credito'),
    debito: selector(state, 'debito')
})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(RendimentoForm)