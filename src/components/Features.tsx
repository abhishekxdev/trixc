import React from 'react';
import { Zap, MessageCircle, CheckCircle, Users, Calendar, BarChart } from 'lucide-react';

export default function Features() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
            Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful Features for
            <br />
            Enhanced Productivity
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover the features that can take your business workflow to the next level
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Automate Workflow */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Automate Workflow & Tasks</h3>
              <p className="text-gray-400 leading-relaxed">
                Let our automation take care of repetitive tasks while you 
                focus on what matters most to your business.
              </p>
            </div>
            
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-white font-semibold">Project Kickoff & Planning</h4>
                  <Zap className="text-emerald-400" size={20} />
                </div>
                
                <div className="space-y-3">
                  {[
                    { task: 'Assign to team leads', completed: true },
                    { task: 'Setup Project Guidelines', completed: true },
                    { task: 'Brainstorm kickoff strategy', completed: false },
                    { task: 'Create timeline theme assets', completed: false }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                        item.completed 
                          ? 'bg-emerald-500 border-emerald-500' 
                          : 'border-gray-500'
                      }`}>
                        {item.completed && <CheckCircle size={12} className="text-white" />}
                      </div>
                      <span className={`text-sm ${
                        item.completed ? 'text-gray-400 line-through' : 'text-gray-300'
                      }`}>
                        {item.task}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Smart Communication */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Smart Communication</h3>
              <p className="text-gray-400 leading-relaxed">
                Stay connected and collaborate in real-time, all in one place with integrated 
                messaging and notifications.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-white font-semibold">Design Phase</h4>
                  <MessageCircle className="text-emerald-400" size={20} />
                </div>
                
                {/* Voice Message UI */}
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full"></div>
                    <span className="text-white text-sm font-medium">Sarah Johnson</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex space-x-1">
                      {Array.from({ length: 20 }).map((_, i) => (
                        <div 
                          key={i} 
                          className="w-1 bg-emerald-400 rounded-full"
                          style={{ 
                            height: Math.random() * 20 + 8,
                            opacity: i < 12 ? 1 : 0.3 
                          }}
                        ></div>
                      ))}
                    </div>
                    <span className="text-gray-400 text-xs">2:43</span>
                  </div>
                  
                  <div className="flex space-x-2">
                    {[
                      { name: 'Mike', avatar: 'bg-blue-500' },
                      { name: 'Lisa', avatar: 'bg-purple-500' },
                      { name: 'John', avatar: 'bg-orange-500' }
                    ].map((user, index) => (
                      <div key={index} className={`w-8 h-8 ${user.avatar} rounded-full`}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}