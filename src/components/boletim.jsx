import React from 'react'

export default props => (
    <table className="table table-bordered">
        <thead>
            <tr>
                <th colSpan="3">Português</th>
            </tr>
        </thead>
        <tbody>
            <tr className="success">
                <td></td>
                <td>Prova mensal</td>
                <td>8.1</td>
            </tr>
            <tr className="success">
                <td></td>
                <td>Prova quinzenal</td>
                <td>7.8</td>
            </tr>
            <tr className="warning">
                <td></td>
                <td>Prova bimestral</td>
                <td>6.7</td>
            </tr>       
            <tr className="danger">
                <th colSpan="2"></th>
                <th>5.5</th>
            </tr>
        </tbody>
        <thead>
            <tr>
                <th colSpan="3">Matemática</th>
            </tr>
        </thead>
        <tbody>
            <tr className="success">
                <td></td>
                <td>Prova mensal</td>
                <td>8.1</td>
            </tr>
            <tr className="success">
                <td></td>
                <td>Prova quinzenal</td>
                <td>7.8</td>
            </tr>
            <tr className="warning">
                <td></td>
                <td>Prova bimestral</td>
                <td>6.7</td>
            </tr>   
            <tr className="success">
                <th colSpan="2"></th>
                <th>7.9</th>
            </tr>                
        </tbody>

    </table>
)