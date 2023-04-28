const React = require('react')

const infoMessage = (props)=>{
    return <div>
        Nazwisko: {props.nazwisko} <br />
        Email: {props.email} <br />
        Wiek: {props.age} <br />
        </div>
}

module.exports = infoMessage