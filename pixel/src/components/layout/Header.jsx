import React from 'react';
import { User, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { SpringCounter } from '../SpringAnimations';
import { useMagneticButton } from '../../hooks/useGSAPAnimations';
import { useUser } from '../../context/UserContext';

const Header = ({ onOpenPayment, onOpenProfile }) => {
    const { stats, user } = useUser();
    const balance = stats?.current_balance || 0;
    const profileBtnRef = useMagneticButton(0.35);
    const balanceBtnRef = useMagneticButton(0.25);

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-[100] safe-area-top"
            style={{
                background: 'linear-gradient(180deg, rgba(7, 6, 15, 0.85) 0%, rgba(7, 6, 15, 0.5) 80%, transparent 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
            }}
        >
            <div className="relative px-4 py-3.5 flex items-center justify-between max-w-[480px] md:max-w-none mx-auto">
                {/* Profile Icon Button */}
                <motion.button
                    ref={profileBtnRef}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onOpenProfile}
                    className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-lg relative overflow-hidden group"
                >
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-tr from-[#3390ec]/10 to-[#a855f7]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    {user?.first_name ? (
                        <span className="text-white font-display font-black text-sm tracking-tight leading-none">
                            {user.first_name.charAt(0).toUpperCase()}
                        </span>
                    ) : (
                        <User size={18} className="text-white/80" />
                    )}
                </motion.button>

                {/* Balance Pill Button */}
                <motion.button
                    ref={balanceBtnRef}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={onOpenPayment}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-lg overflow-hidden relative group"
                >
                    <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#3390ec] to-[#a855f7] flex items-center justify-center shadow-inner relative overflow-hidden">
                        <Zap size={11} className="text-white fill-white" />
                    </div>
                    <span className="text-white font-display font-black text-[14px] tracking-tight pr-0.5">
                        <SpringCounter value={balance} />
                    </span>
                    <motion.div
                        className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                </motion.button>
            </div>
        </motion.header>
    );
};

export default Header;
