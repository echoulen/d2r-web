import * as winControl from 'win-control';

const WINDOW_TITLE: string = "Diablo II: Resurrected";
const SWITCH_INTERVAL: number = 2000; // 2 seconds

export async function switchWindows(): Promise<void> {
  // Find all windows with the specified title
  const windows: number[] = winControl.findWindows(null, WINDOW_TITLE);

  if (windows.length === 0) {
    console.log("No windows found with the title: " + WINDOW_TITLE);
    return;
  }

  console.log(`Found ${windows.length} windows with the title: ${WINDOW_TITLE}`);

  let currentIndex: number = 0;

  // Function to switch to the next window
  function switchToNextWindow(): void {
    if (currentIndex >= windows.length) {
      currentIndex = 0;
      console.log("Completed one full cycle of all windows. Starting over.");
    }

    const currentWindow: number = windows[currentIndex];
    winControl.setForeground(currentWindow);
    console.log(`Switched to window ${currentIndex + 1} of ${windows.length}`);

    currentIndex++;
  }

  // Initial switch
  switchToNextWindow();

  // Set up interval to switch windows every 2 seconds
  const intervalId: NodeJS.Timeout = setInterval(switchToNextWindow, SWITCH_INTERVAL);

  // Optional: Stop after going through all windows once
  setTimeout(() => {
    clearInterval(intervalId);
    console.log("Finished switching through all windows.");
  }, SWITCH_INTERVAL * windows.length);
}

// Run the window switching function
switchWindows().catch((error: Error) => console.error(error));
