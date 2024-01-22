'use client'

export default function Error({
    error,
    reset
}:{
    error:Error,
    reset:()=>void
}) {
    return(
        <div>
            <h2>客户端出错!</h2>
            <button onClick={()=>reset()}>请点击重试</button>
        </div>
    )

}