import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Paintbrush, LayoutTemplate, Blocks, Bell, Music, Sparkles } from "lucide-react";

import Card from "../molecules/card/Card";
import ToggleField from "../molecules/ToggleField";
import SelectField from "../molecules/SelectField";
import InputField from "../molecules/InputField";

const TABS = [
  { id: "appearance", label: "Appearance", icon: Paintbrush },
  { id: "layout", label: "Layout", icon: LayoutTemplate },
  { id: "widgets", label: "Widgets", icon: Blocks },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "music", label: "Music", icon: Music },
];

export default function SettingsPanel() {
  const [activeTab, setActiveTab] = useState("appearance");

  return (
    <Card
      shadow="lg"
      className="w-full max-w-5xl bg-base-100/50 backdrop-blur-2xl border border-base-300 shadow-2xl overflow-hidden rounded-3xl"
    >
      <div className="flex flex-col md:flex-row min-h-[600px]">
        <div className="w-full md:w-72 bg-base-200/40 p-6 flex flex-col gap-6 border-b md:border-b-0 md:border-r border-base-300">
          <div className="flex items-center gap-3 px-2 mt-2">
            <div className="p-2.5 bg-primary/20 text-primary rounded-xl shadow-inner shadow-primary/20">
              <Sparkles size={22} className="animate-pulse" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          </div>
          
          <nav className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-hide">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    relative flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all duration-300 ease-out whitespace-nowrap overflow-hidden group
                    ${isActive ? "text-primary font-semibold shadow-sm" : "text-base-content/60 hover:bg-base-300/50 hover:text-base-content font-medium"}
                  `}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-tab-bg"
                      className="absolute inset-0 bg-primary/10 rounded-2xl z-0"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <div className="relative z-10 flex items-center gap-3">
                    <Icon size={20} className={isActive ? "" : "group-hover:scale-110 transition-transform duration-300"} />
                    {tab.label}
                  </div>
                  {isActive && (
                    <motion.div
                      layoutId="active-tab-indicator"
                      className="absolute left-0 w-1.5 h-1/2 bg-primary rounded-r-full top-1/2 -translate-y-1/2 hidden md:block z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>
        </div>
        <div className="flex-1 p-6 md:p-10 relative overflow-y-auto bg-gradient-to-br from-base-100/40 to-base-200/10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="space-y-8"
            >
              {activeTab === "appearance" && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-2">Appearance</h3>
                    <p className="text-base-content/60 text-lg">Customize the look and feel of your dashboard.</p>
                  </div>

                  <div className="grid gap-4">
                    <SelectField
                      title="Theme"
                      description="Choose your global UI theme"
                      options={[
                        { value: "neonfocus", label: "Neon Focus" },
                        { value: "gaming", label: "Gaming" },
                        { value: "music", label: "Music" },
                      ]}
                      defaultValue="neonfocus"
                      className="hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 bg-base-100/80 backdrop-blur-md border border-base-200/50"
                    />

                    <ToggleField
                      title="Enable Blur Effects"
                      description="Use glassy background effects across the app"
                      checked={true}
                      className="hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 bg-base-100/80 backdrop-blur-md border border-base-200/50"
                    />

                    <ToggleField
                      title="Rounded Corners"
                      description="Use softer, rounded edges for components"
                      checked={true}
                      className="hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 bg-base-100/80 backdrop-blur-md border border-base-200/50"
                    />
                  </div>
                </div>
              )}

              {activeTab === "layout" && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-2">Layout</h3>
                    <p className="text-base-content/60 text-lg">Manage your workspace organization.</p>
                  </div>

                  <div className="grid gap-4">
                    <ToggleField
                      title="Sidebar Open by Default"
                      description="Keep the navigation menu expanded"
                      checked={true}
                      className="hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 bg-base-100/80 backdrop-blur-md border border-base-200/50"
                    />

                    <SelectField
                      title="Density"
                      description="How much information to display on screen"
                      options={[
                        { value: "compact", label: "Compact" },
                        { value: "comfortable", label: "Comfortable" },
                      ]}
                      defaultValue="comfortable"
                      className="hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 bg-base-100/80 backdrop-blur-md border border-base-200/50"
                    />
                  </div>
                </div>
              )}

              {activeTab === "widgets" && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-2">Widgets</h3>
                    <p className="text-base-content/60 text-lg">Configure widget behavior and refresh rates.</p>
                  </div>

                  <div className="grid gap-4">
                    <ToggleField
                      title="Enable Animations"
                      description="Show smooth transitions in widgets"
                      checked={true}
                      className="hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 bg-base-100/80 backdrop-blur-md border border-base-200/50"
                    />

                    <ToggleField
                      title="Auto Refresh"
                      description="Keep data up-to-date automatically"
                      checked={true}
                      className="hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 bg-base-100/80 backdrop-blur-md border border-base-200/50"
                    />

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl p-4 bg-base-100/80 backdrop-blur-md border border-base-200/50 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <div className="flex flex-col">
                        <span className="font-medium text-base-content">
                          Refresh Interval
                        </span>
                        <span className="text-sm text-base-content/70">
                          Set the auto-refresh rate in seconds
                        </span>
                      </div>
                      <InputField
                        type="number"
                        defaultValue={30}
                        min={5}
                        className="w-24 sm:w-32"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "notifications" && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-2">Notifications</h3>
                    <p className="text-base-content/60 text-lg">Manage how and when you are alerted.</p>
                  </div>

                  <div className="grid gap-4">
                    <ToggleField
                      title="Enable Notifications"
                      description="Receive alerts for important events"
                      checked={true}
                      className="hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 bg-base-100/80 backdrop-blur-md border border-base-200/50"
                    />

                    <ToggleField
                      title="Notification Sound"
                      description="Play a sound when a notification arrives"
                      checked={false}
                      className="hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 bg-base-100/80 backdrop-blur-md border border-base-200/50"
                    />
                  </div>
                </div>
              )}

              {activeTab === "music" && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-2">Music Widget</h3>
                    <p className="text-base-content/60 text-lg">Customize the integrated media player.</p>
                  </div>

                  <div className="grid gap-4">
                    <ToggleField
                      title="Show Album Cover"
                      description="Display artwork for the current track"
                      checked={true}
                      className="hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 bg-base-100/80 backdrop-blur-md border border-base-200/50"
                    />

                    <ToggleField
                      title="Show Progress Bar"
                      description="Track playback position"
                      checked={true}
                      className="hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 bg-base-100/80 backdrop-blur-md border border-base-200/50"
                    />

                    <ToggleField
                      title="Show Artist Name"
                      description="Display the artist information"
                      checked={true}
                      className="hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 bg-base-100/80 backdrop-blur-md border border-base-200/50"
                    />
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Card>
  );
}