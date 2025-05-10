import { motion } from 'framer-motion';
import { cardVariants } from '../utils/animations';
import { 
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaDocker, FaFigma, 
  FaMobileAlt, FaLaptopCode 
} from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiExpress, SiMongodb, SiPostgresql, SiAdobexd } from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di';

const iconMap = {
  FaHtml5,
  FaCss3Alt,
  DiJavascript1,
  FaReact,
  SiTypescript,
  SiTailwindcss,
  FaNodeJs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  FaDocker,
  FaGitAlt,
  FaFigma,
  SiAdobexd,
  FaMobileAlt,
  FaLaptopCode
};

const SkillCard = ({ skill }) => {
  const IconComponent = iconMap[skill.icon];

  return (
    <motion.div
      className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.1 }}
    >
      {IconComponent && (
        <div className="mb-3 text-4xl text-indigo-600 dark:text-indigo-400">
          <IconComponent />
        </div>
      )}
      <h3 className="text-lg font-medium text-gray-900 dark:text-white">{skill.name}</h3>
    </motion.div>
  );
};

export default SkillCard;