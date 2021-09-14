import React, { useState } from "react";
import Cookies from 'js-cookie';
import { useHistory } from "react-router-dom";
import { Container, Row, Col, 
    Form, InputGroup, InputGroupAddon, InputGroupText, 
    Button, FormGroup, Label, Input} from 'reactstrap';


function CreateAccount() {

    let history = useHistory()

    let location = useLocation()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [auth, setAuth] = useState(true)
    const [showPassword, setShowPassword] = useState(false)

        return (
            <div className="CreateAccount">
                <h2>Login</h2>
            </div>
        )

}

export default Login;