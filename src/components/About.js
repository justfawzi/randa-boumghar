import React from 'react'

export default function About() {
    return (
        <div className="about" id='about'>
            <div className='container'>
                <div className='row pt-5'>
                    <div className='col mt-5'>
                        <h1>About me</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam obcaecati eaque animi recusandae reiciendis excepturi illum ipsam libero, corporis tenetur aliquam fuga ut harum reprehenderit nihil nostrum fugiat maiores magni.
                        </p>
                        <div className='row img mt-5'>
                            <div className='col'>
                                <img src='images/image2.jpg' width='450px' />
                            </div>
                            <div className='col'>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam obcaecati eaque animi recusandae reiciendis excepturi illum ipsam libero, corporis tenetur aliquam fuga ut harum reprehenderit nihil nostrum fugiat maiores magni.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
