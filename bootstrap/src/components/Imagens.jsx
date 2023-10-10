export default function Imagens(){
    return(
        <>
            <img src="http://lorempixel.com.br/800/200/?1" className="img-fluid" alt="" />
            <img src="http://lorempixel.com.br/300/200/?1" className="img-thumbnail" alt="" />
            <figure>
                <img src="http://lorempixel.com.br/300/200/?1" className='rounded float-start img-fluid'alt="" />
                <img src="http://lorempixel.com.br/300/200/?1" className='rounded float-end img-fluid'alt="" />
            </figure>
        </>
    )
}