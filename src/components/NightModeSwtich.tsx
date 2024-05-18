import React from 'react';
import { Switch } from "@nextui-org/react";
import { SunIcon } from "./Icons/SunIcon";
import { MoonIcon } from "./Icons/MoonIcon";
import { getItem } from 'localforage';
import { useDataContext } from '../api/context/DataContext';

interface NightModeSwitchProps {
  updateMode: (newMode: string) => void;
}

const NightModeSwitch: React.FC<NightModeSwitchProps> = ({ updateMode }) => {
  const {mode} = useDataContext(); 

  let isDarkMode = mode === "dark";
  console.log('mode',mode)
  console.log(isDarkMode);
  
  const handleChange = () => {
    updateMode(isDarkMode ? 'light' : 'dark');
  };

  return (
    <Switch
      isSelected={isDarkMode}
      onChange={handleChange}
      size="md"
      color="secondary"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <MoonIcon className={className} />
        ) : (
          <SunIcon className={className} />
        )
      }
    >
      Dark mode
    </Switch>
  );
};

export default NightModeSwitch;
