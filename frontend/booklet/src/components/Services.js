

import React, { Component } from 'react'
import Title from "./Title"
import {FaAmazonPay ,FaGifts,FaHandPeace,FaGlassCheers } from "react-icons/fa"
import Books from '../pages/Books'

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaAmazonPay/>,
                title:"Buy Books",
                desc:"One can buy books according to their choice by paying certain amount of money"
            },
            {
                icon:<FaGifts/>,
                title:"Free Share",
                desc:"One can share books for free to their choice by paying certain amount of money"
            },
            {
                icon:<FaGlassCheers/>,
                title:"Search",
                desc:"One ng to their c paying certain amount of money"
            },
            {
                icon:<FaHandPeace/>,
                title:"Comm",
                desc:"One cartain amount of money"
            }
        ]
    };

    render() {
        return (
            <section className="services">
                 <Title title="Services"/>
                 <div className="services-center">
                        {this.state.services.map((item,index)=>{return (
                            <article key={index} className="services">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.desc}</p>
                            </article>
                        );
                        })}
                </div>
            </section>
        )
    }
}
