import { motion } from "framer-motion";

import { CardSection } from "../../components";
import { containerVariantsLayout } from "../../Utility";

const section = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariantsLayout}
            className="w-4/5 mx-auto flex justify-center gap-10 items-center my-10 flex-wrap   "
        >
            <CardSection
                titulo="Characters"
                tipo="https://nosubmarinesdotcom.files.wordpress.com/2020/12/lvvlzkf.jpg?w=840"
                films="perso"
            />
            <CardSection
                titulo="Films"
                tipo="https://i.blogs.es/3ff70d/espinof-studio-ghibli-todas-las-peliculas-peor-mejor/840_560.jpg"
                films="films"
            />
            <CardSection
                titulo="Locations"
                tipo="https://a0.cdn.japantravel.com/photo/65904-220850/840x560!/aichi-ghibli-park-coming-in-2022-220850.jpg"
                films="locations"
            />
        </motion.div>
    );
};

export default section;
