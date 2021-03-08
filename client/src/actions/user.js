import axios from 'axios'

export const registration = async (email, password) => {
    try {
        const response = await axios.post(`http://localhost:3030/api/auth/registration`, {
            email,
            password
        })
        alert(response.data.message)
    } catch (e) {
        alert(e.response.data.message)
    }
}