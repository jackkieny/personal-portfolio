import { createTheme, MantineProvider } from '@mantine/core';
import { Left } from './components/left/Left';
import { Right } from './components/right/Right';
import { MantineRef } from './components/mantineref/MantineRef';
import classes from './app.module.css';
import '@mantine/core/styles.css';
import { useEffect } from 'react';

const theme = createTheme({
  colors: {
    primary: [
      "#f2f5f8", "#e4e6e9", "#c5ccd3", "#a3b0be", "#8798ad",
      "#202C39", "#1A1F26", "#14171D", "#0E1014", "#08090B"
    ]
  }
});

function InitMouseGlow() {
  const circle = document.getElementById('mouseglow');
  const onMouseMove = (e: any) => {
    if (circle) {
      let centerX = e.pageX - (circle.offsetWidth / 2);
      let centerY = e.pageY - (circle.offsetHeight / 2);
      circle.style.left = centerX + 'px';
      circle.style.top = centerY + 'px';
    }
  };

  document.addEventListener('mousemove', onMouseMove);
  return () => {
    document.removeEventListener('mousemove', onMouseMove);
  };
}

function App() {
  useEffect(() => {
    const cleanup = InitMouseGlow();
    return cleanup;
  }, []);

  return (
    <MantineProvider theme={theme}>
      <div className={classes.container}>
        <div className={classes.content}>
          <div className={classes.left}>
            <Left/>
          </div>
          <div className={classes.right}>
            <Right/>
          </div>
        </div>
        <div className={classes.mantine}>
          <MantineRef/>
        </div>
        <div id="mouseglow" className={classes.mouse}></div>
      </div>
    </MantineProvider>
  );
}

export default App;