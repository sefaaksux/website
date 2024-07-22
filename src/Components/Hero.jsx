import React from "react";

const Hero = (props) => {
    return (
        <section className="w-full">
            <div className="flex justify-center items-center bg-gray-700">
                <div className="flex flex-col items-center max-w-4xl mx-auto px-4">
                    <p className="text-3xl mt-10 mb-10 text-gega-grey font-bold shadow-2xl rounded-lg p-4">
                        HAKKIMDA
                    </p>

                    <div className="relative flex justify-center items-center w-52 h-52">
                        <div className="absolute top-0 left-0 w-full h-full rounded-full border-2 bg-gradient-to-l from-blue-900 to-transparent animate-spin-slow"></div>
                        <div className="flex justify-center items-center bg-gega-red w-52 h-52 rounded-full overflow-hidden">
                            <img
                                src="/images/photoMy.png"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <p className="mt-10 text-center overflow-hidden text-white mb-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus illo,
                        consequuntur ratione maxime distinctio quaerat inve rerum sit magni quisquam,
                        alias esse voluptate eaque qui optio, vitae nam impedit beatae corrupti neque,
                        iusto recusandae! Recusandae, laudantndae dolor vitae maxime nam incidunt, id,
                        earum provident quaerat neque libero enim? Sapiente consectetur, a esse sequi
                        deleniti error atque nobis laboriosam repellendus accusantium ipsam perspiciatis
                        necessitatibus quod? Voluptates quos mollitia nulla optio sit vitae enim alias,
                        ipsum ullam quidem error esse qui?
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
