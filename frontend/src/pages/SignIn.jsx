import { Link } from "react-router-dom"
import Button from "../components/Button"
import Input from "../components/Input"
import { useState } from "react"

const SignIn = async (e) => {
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setError("")

        const user = {
            username: e.target.username.value,
            password: e.target.password.value
        } try {
            const data = await loginUser(user)
            const json = await data.json()
        } catch (err) {
            console.error(err)
            setError(err.message)
        }

    }
    return (
        <div className="auth-page">
            <div className="auth-container">
                <h1 className="auth-title">Вход</h1>
                {error.length > 0 && <div className="auth-error">{error}</div>}
                <form onSubmit={handleSubmit} className="auth-form">
                    <Input
                        placeholder="Имя пользователя"
                        required
                        name="username"
                    />
                    <Input
                        placeholder="Пароль"
                        required
                        name="password"
                        type="password"
                    />
                    <Button>Войти</Button>
                </form>
                <footer className="auth-footer">
                    <Link to="/signup">Зарегистрироваться</Link>
                </footer>
            </div>
        </div>
    )
}

export default SignIn
