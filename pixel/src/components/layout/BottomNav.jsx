import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import AnimatedIcon from '../ui/AnimatedIcon';
import { TelegramHome, TelegramGallery, TelegramHistory, TelegramProfile } from '../ui/TelegramIcons';

const BottomNav = ({ activeTab, onTabChange, onCreateClick, isVisible = true, zIndex = 50 }) => {
    return (
        <div 
            style={{ zIndex }} 
            className={`fixed bottom-4 left-4 right-4 transition-transform duration-500 ease-out ${
                !isVisible ? 'translate-y-[120%]' : 'translate-y-0'
            }`}
        >
            <nav className="glass-panel rounded-[24px] px-2 py-2 flex justify-around items-center relative border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.5)]">

                {/* Home */}
                <NavButton
                    iconComponent={TelegramHome}
                    label="Главная"
                    isActive={activeTab === 'home'}
                    onClick={() => onTabChange('home')}
                />

                {/* Gallery */}
                <NavButton
                    iconComponent={TelegramGallery}
                    label="Галерея"
                    isActive={activeTab === 'gallery'}
                    onClick={() => onTabChange('gallery')}
                />

                {/* Create (Center) */}
                <motion.button
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.92 }}
                    onClick={onCreateClick}
                    className="flex flex-col items-center justify-center min-w-[52px] relative -translate-y-4"
                >
                    <div className="w-12 h-12 bg-gradient-to-tr from-[#3390ec] to-[#a855f7] rounded-full flex items-center justify-center shadow-[0_6px_20px_rgba(168,85,247,0.35)] border border-white/15 overflow-hidden">
                        <Plus size={22} className="text-white z-10" />
                        <motion.div
                            className="absolute inset-0 bg-white/20"
                            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />
                    </div>
                </motion.button>

                {/* History */}
                <NavButton
                    iconComponent={TelegramHistory}
                    label="История"
                    isActive={activeTab === 'history'}
                    onClick={() => onTabChange('history')}
                />

                {/* Profile */}
                <NavButton
                    iconComponent={TelegramProfile}
                    label="Профиль"
                    isActive={activeTab === 'profile'}
                    onClick={() => onTabChange('profile')}
                />
            </nav>
        </div>
    );
};

const NavButton = ({ iconComponent: IconComponent, label, isActive, onClick }) => (
    <button
        onClick={onClick}
        className="flex flex-col items-center justify-center gap-0.5 min-w-[56px] h-[46px] relative transition-colors duration-200"
    >
        {isActive && (
            <motion.div
                layoutId="activeTabPill"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                className="absolute inset-0 bg-white/5 rounded-2xl border border-white/5"
            />
        )}
        <div className="relative flex items-center justify-center h-6 z-10">
            <IconComponent active={isActive} size={24} />
        </div>
        <span className={`text-[10px] font-bold z-10 transition-colors duration-300 font-display ${
            isActive ? 'text-[#3390ec]' : 'text-gray-500'
        }`}>
            {label}
        </span>
    </button>
);

export default BottomNav;
