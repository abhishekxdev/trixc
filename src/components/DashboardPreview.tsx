import React from 'react';
import { Cpu, Lock, Sparkles, Zap } from 'lucide-react';

export default function DashboardPreview() {
    return (
        <section className="py-16 md:py-32 bg-black">
            <div className="mx-auto max-w-5xl space-y-12 px-6">
                <div className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12">
                    <h2 className="text-4xl font-semibold text-white">The Lyra ecosystem brings together our models</h2>
                    <p className="max-w-sm sm:ml-auto text-gray-400">Empower your team with workflows that adapt to your needs, whether you prefer git synchronization or a AI Agents interface.</p>
                </div>
                <div className="relative rounded-3xl p-3 md:-mx-8 lg:col-span-3">
                    <div className="aspect-88/36 relative">
                        <div className="bg-gradient-to-t from-black absolute inset-0 to-transparent"></div>
                        <img src="/Untitled (1).png" className="absolute inset-0 z-10 w-full h-full object-cover rounded-3xl" alt="dashboard preview" />
                    </div>
                </div>
                <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Zap className="size-4 text-blue-500" />
                            <h3 className="text-sm font-medium text-white">Faaast</h3>
                        </div>
                        <p className="text-gray-400 text-sm">It supports an entire helping developers and innovate.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Cpu className="size-4 text-blue-500" />
                            <h3 className="text-sm font-medium text-white">Powerful</h3>
                        </div>
                        <p className="text-gray-400 text-sm">It supports an entire helping developers and businesses.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Lock className="size-4 text-blue-500" />
                            <h3 className="text-sm font-medium text-white">Security</h3>
                        </div>
                        <p className="text-gray-400 text-sm">It supports an helping developers businesses innovate.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Sparkles className="size-4 text-blue-500" />
                            <h3 className="text-sm font-medium text-white">AI Powered</h3>
                        </div>
                        <p className="text-gray-400 text-sm">It supports an helping developers businesses innovate.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}