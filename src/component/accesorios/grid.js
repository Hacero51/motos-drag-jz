import React from 'react';

import Casco from "../../imagen/accesorios/casco.png";
import Botas from "../../imagen/accesorios/botas.png";
import Guantes from "../../imagen/accesorios/guantes.png";
import Maletas from "../../imagen/accesorios/maletas.png";
import Vestuario from "../../imagen/accesorios/vestuario.png";
import Masacceso from "../../imagen/accesorios/masacceso.png";

export default function ImgAccesorios() {


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-1">
                    </div>
                    <div className="col-md-3">
                        <img
                            src={Casco}
                            height="100px"
                            width="100px"
                            className="imgRedondaccesorios"
                        />
                    </div>
                    <div className="col-md-1">
                    </div>
                    <div className="col-md-3">
                        <img
                            src={Botas}
                            height="300px"
                            width="300px"
                            className='imgRedondaccesorios'
                        />
                    </div>
                    <div className="col-md-1">
                    </div>
                    <div className="col-md-3">
                        <img
                            src={Guantes}
                            height="300px"
                            width="300px"
                            className='imgRedondaccesorios'
                        />
                    </div>
                    <br />
                </div>
                <div className="row">
                    <div className="col-md-1">
                    </div>
                    <div className="col-md-3">
                        <img
                            src={Maletas}
                            height="300px"
                            width="300px"
                            className='imgRedondaccesorios'
                        />
                    </div>
                    <div className="col-md-1">
                    </div>
                    <div className="col-md-3">
                        <img
                            src={Vestuario}
                            height="300px"
                            width="300px"
                            className='imgRedondaccesorios'
                        />
                    </div>
                    <div className="col-md-1">
                    </div>
                    <div className="col-md-3">
                        <img
                            src={Masacceso}
                            height="300px"
                            width="300px"
                            className='imgRedondaccesorios'
                        />
                    </div>
                    <br />
                </div>
            </div>
        </>

    );
}