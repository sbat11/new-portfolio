import { BrowserRouter } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="relative z-0 bg-gradient-to-br from-dark-100 to-dark-200 min-h-screen"
        >
          {/* Hero Section with Parallax Background */}
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-dark-100/50 to-dark-200/50 z-10" />
            <StarsCanvas />
            <Navbar />
            <Hero />
          </div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="relative z-20"
          >
            <About />
            <Experience />
            <Tech />
            <Works />
          </motion.div>

          {/* Contact Section with Floating Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-0"
          >
            <Contact />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default App;