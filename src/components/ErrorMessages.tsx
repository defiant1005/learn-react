interface ErrorMessagesProps {
    error: string
}

export function ErrorMessages({error}: ErrorMessagesProps) {


    return (
        <p className='text-center text-red-600'>{ error }</p>
    )
}