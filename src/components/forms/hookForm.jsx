import { useForm } from "react-hook-form"


export function HookForm() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const sumbmit=(values)=>{
alert(JSON.stringify(values))
    }
    return (
        <div className="container-fluid">
            <form onSubmit={handleSubmit(sumbmit)}>
                <dl>
                    <dt>Name</dt>
                    <dd><input type="text" name="Name"
                        {...register('Name', { required: true, minLength: 4, pattern })} /></dd>
                    <dd className="text-danger">

                        {
                            (errors.Name.type === 'required') ? <span>Name required</span> : <span></span> && (errors.Name?.type === 'minLength' ? <span>Name to Short</span> : <span></span>)}

                    </dd>
                </dl>
                <button>Submit</button>

            </form>
        </div>
    )
}