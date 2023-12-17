import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IFormState } from '../../model/types'
import styles from './Form.module.scss'

const Form: FC = () => {
  const { register, handleSubmit, reset } = useForm<IFormState>()
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const onSubmit: SubmitHandler<IFormState> = (data) => {
    setIsLoading(true)
    fetch('http://localhost:5000/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        if (!data) return

        setIsSuccess(true)
        reset()
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {isSuccess ? (
          <div className={styles.success}>Форма отправлена</div>
        ) : (
          <>
            <h1>GTA 6 - Оставь заявку</h1>
            <input type='name' placeholder='Введите Имя:' {...register('name')} />
            <input type='email' placeholder='Введите Email:' {...register('email')} />
            <button disabled={isLoading}>{isLoading ? 'Отправка...' : 'Хочу GTA!'}</button>
          </>
        )}
      </form>
    </div>
  )
}

export default Form
