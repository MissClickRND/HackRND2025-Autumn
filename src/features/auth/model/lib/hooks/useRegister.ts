import { useState } from "react"
import { IRegisterRequest } from "../../types"
import { register } from "../../api"
import { useNotifications } from "../../../../../shared/lib/hooks/useNotifications"

export const useRegister = () => {
    const [isLoading ,setIsLoading] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const {showError} = useNotifications()

    const fetchRegister = async (body: IRegisterRequest) => {
        try {
            setIsLoading(true)
            setIsError(false)
            setError(null)

            await register(body)
        } catch (err) {
            setIsError(true)
            setError(err instanceof Error ? err.message  : "Ошибка при регистрации")
            showError(err instanceof Error ? err.message  : "Ошибка при регистрации")
        } finally {
            setIsLoading(false)
        }
    }

    return {isLoading, isError, error, register: fetchRegister}
}