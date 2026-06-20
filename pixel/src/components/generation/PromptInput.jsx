import React from 'react';
import { motion } from 'framer-motion';
import { Mic, MicOff, Clock, Sparkles, Recycle, Check } from 'lucide-react';
import BottomSheet from '../ui/BottomSheet';
import { CreateGraphic } from '../ui/GuideGraphics';

const PromptInput = ({
    inputs,
    setInputs,
    t,
    showPromptHistory,
    setShowPromptHistory,
    recentPrompts,
    handleVoiceInput,
    isListening,
    handleEnhancePrompt,
    isEnhancing,
    showRefine,
    setShowRefine,
    PRESET_STYLES,
    handleAddPreset,
    playClick,
    itemVariants
}) => {
    return (
        <motion.div variants={itemVariants} className="px-4">
            <div className="bg-white/[0.03] backdrop-blur-md border border-white/5 rounded-[24px] p-5 relative shadow-lg overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#3390ec]/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="flex items-center gap-3 mb-4 relative z-10">
                    <div className="w-12 h-12 rounded-[14px] bg-gradient-to-tr from-[#3390ec] to-[#a855f7] flex items-center justify-center shadow-md">
                        <CreateGraphic />
                    </div>
                    <div>
                        <h2 className="text-[17px] font-black font-display text-white tracking-tight leading-tight">{t('creation.question')}</h2>
                        <p className="text-[13px] text-gray-400 mt-0.5 font-semibold font-display">{t('creation.describeIdea')}</p>
                    </div>
                </div>

                <div className="relative z-10">
                    <div className="relative">
                        <textarea
                            placeholder={t('creation.placeholder')}
                            value={inputs.prompt || ''}
                            onChange={e => setInputs({ ...inputs, prompt: e.target.value })}
                            onFocus={() => setShowPromptHistory(true)}
                            onBlur={() => setTimeout(() => setShowPromptHistory(false), 200)}
                            className="w-full bg-white/[0.04] focus:bg-white/[0.08] focus:border-[#3390ec]/30 rounded-[20px] p-4 pr-12 text-white text-[15px] placeholder:text-gray-500 resize-none outline-none min-h-[100px] leading-relaxed transition-all shadow-inner border border-white/5 focus:ring-4 focus:ring-[#3390ec]/10"
                        />
                        <button
                            onClick={handleVoiceInput}
                            className={`absolute right-3.5 top-3.5 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isListening ? 'bg-red-500 text-white animate-pulse' : 'bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-white/10'}`}
                        >
                            {isListening ? <MicOff size={15} /> : <Mic size={15} />}
                        </button>
                    </div>

                    <BottomSheet
                        isOpen={showPromptHistory && recentPrompts.length > 0}
                        onClose={() => setShowPromptHistory(false)}
                        title="История промптов"
                    >
                        <div className="space-y-1">
                            {recentPrompts.map((p, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        setInputs({ ...inputs, prompt: p });
                                        setShowPromptHistory(false);
                                    }}
                                    className="w-full text-left px-4 py-4 text-[16px] text-white border-b border-white/5 last:border-none hover:bg-white/5 transition-colors line-clamp-2"
                                >
                                    {p}
                                </button>
                            ))}
                        </div>
                    </BottomSheet>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleEnhancePrompt}
                        disabled={isEnhancing || !inputs.prompt?.trim()}
                        className={`px-4.5 py-2 rounded-full text-[13px] font-bold font-display whitespace-nowrap transition-all shadow-sm focus:outline-none flex items-center gap-1.5 flex-shrink-0
                            ${inputs.prompt?.trim()
                                ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-purple-300 hover:text-white hover:border-purple-400/50'
                                : 'bg-white/[0.02] border border-white/5 text-gray-500 cursor-not-allowed'
                            }`}
                    >
                        {isEnhancing ? (
                            <><span className="w-3.5 h-3.5 border-2 border-purple-400/30 border-t-purple-400 rounded-full animate-spin" /> Улучшаю...</>
                        ) : (
                            <><Sparkles size={14} /> Улучшить</>
                        )}
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => { setShowRefine(!showRefine); playClick(); }}
                        disabled={!inputs.prompt?.trim()}
                        className={`px-4.5 py-2 rounded-full text-[13px] font-bold font-display whitespace-nowrap transition-all shadow-sm focus:outline-none flex items-center gap-1.5 flex-shrink-0
                            ${showRefine
                                ? 'bg-[#3390ec] text-white border border-[#3390ec]'
                                : inputs.prompt?.trim()
                                    ? 'bg-[#3390ec]/10 border border-[#3390ec]/30 text-[#3390ec] hover:text-white hover:border-[#3390ec]'
                                    : 'bg-white/[0.02] border border-white/5 text-gray-500 cursor-not-allowed'
                            }`}
                    >
                        <Recycle size={14} /> {showRefine ? 'Отмена' : 'Изменить'}
                    </motion.button>

                    <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                        {PRESET_STYLES.map(style => (
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                key={style.id}
                                onClick={() => handleAddPreset(style.prompt)}
                                className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/5 text-[13px] font-bold font-display text-white whitespace-nowrap hover:bg-white/[0.06] hover:border-white/10 transition-all shadow-sm focus:outline-none"
                            >
                                {style.label}
                            </motion.button>
                        ))}
                    </div>
                </div>

                <AnimatePresence>
                    {showRefine && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-4 pt-4 border-t border-white/5"
                        >
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="Что изменить? (например: сделай в стиле киберпанк)"
                                    className="flex-1 bg-white/[0.04] rounded-full px-4 py-2.5 text-[14px] text-white outline-none border border-white/5 focus:border-[#3390ec]/50"
                                    autoFocus
                                />
                                <button className="bg-[#3390ec] text-white px-5 py-2.5 rounded-full text-[13px] font-bold font-display">
                                    OK
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default React.memo(PromptInput);
