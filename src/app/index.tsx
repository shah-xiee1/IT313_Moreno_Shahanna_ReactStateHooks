import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import PracticeTracker from "../components/PracticeTracker";
import Stopwatch from "../components/Stopwatch";
import useStopwatch from "../components/useStopwatch";

export default function LabScreen() {
  const [solved, setSolved] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const seconds = useStopwatch(isRunning);

  const handleSolve = () => {
    setSolved((s) => s + 1);
  };

  const handleReset = () => {
    setSolved(0);
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.smallTitle}>IT 313 • MOBILE PROGRAMMING</Text>

          <Text style={styles.mainTitle}>Lab Practice</Text>

          <Text style={styles.subtitle}>
            Track your progress and focus on your laboratory tasks.
          </Text>
        </View>

        <PracticeTracker
          solved={solved}
          onSolve={handleSolve}
          onReset={handleReset}
        />

        <Stopwatch seconds={seconds} isRunning={isRunning} />

        <View style={styles.controlCard}>
          <Text style={styles.controlTitle}>Timer Controls</Text>

          <Text style={styles.controlSubtitle}>
            Start when you begin working and stop when you take a break.
          </Text>

          <View style={styles.controlRow}>
            <TouchableOpacity style={styles.startButton} onPress={handleStart}>
              <Text style={styles.startButtonText}>Start</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.stopButton} onPress={handleStop}>
              <Text style={styles.stopButtonText}>Stop</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.footer}>
          Keep practicing. Progress comes one problem at a time.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F4F6FA",
  },

  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 35,
  },

  header: {
    marginBottom: 22,
  },

  smallTitle: {
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1,
    color: "#2F6FED",
    marginBottom: 6,
  },

  mainTitle: {
    fontSize: 34,
    fontWeight: "900",
    color: "#1E2025",
  },

  subtitle: {
    fontSize: 14,
    lineHeight: 21,
    color: "#777D87",
    marginTop: 6,
    maxWidth: 330,
  },

  controlCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 22,
    elevation: 3,
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  controlTitle: {
    fontSize: 19,
    fontWeight: "800",
    color: "#24262B",
  },

  controlSubtitle: {
    fontSize: 13,
    lineHeight: 19,
    color: "#858A93",
    marginTop: 5,
    marginBottom: 18,
  },

  controlRow: {
    flexDirection: "row",
    gap: 10,
  },

  startButton: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 14,
    backgroundColor: "#238B45",
    alignItems: "center",
  },

  startButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
  },

  stopButton: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 14,
    backgroundColor: "#EEEEF0",
    alignItems: "center",
  },

  stopButtonText: {
    color: "#3D4046",
    fontSize: 15,
    fontWeight: "800",
  },

  footer: {
    textAlign: "center",
    color: "#9297A0",
    fontSize: 12,
    marginTop: 22,
  },
});
