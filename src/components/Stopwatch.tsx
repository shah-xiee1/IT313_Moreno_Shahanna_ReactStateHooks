import { StyleSheet, Text, View } from "react-native";

type StopwatchProps = {
  seconds: number;
  isRunning: boolean;
};

export default function Stopwatch({ seconds, isRunning }: StopwatchProps) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedTime = `${String(minutes).padStart(
    2,
    "0",
  )}:${String(remainingSeconds).padStart(2, "0")}`;

  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.label}>LAB SESSION</Text>

        <View
          style={[styles.statusDot, isRunning && styles.statusDotRunning]}
        />
      </View>

      <Text style={styles.title}>Study Timer</Text>

      <Text style={styles.time}>{formattedTime}</Text>

      <View style={[styles.statusBox, isRunning && styles.statusBoxRunning]}>
        <Text
          style={[styles.statusText, isRunning && styles.statusTextRunning]}
        >
          {isRunning ? "Running..." : "Paused"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "#20242C",
    borderRadius: 24,
    padding: 24,
    marginBottom: 18,
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  label: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1,
    color: "#9EA4AF",
  },

  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#777777",
  },

  statusDotRunning: {
    backgroundColor: "#55D98A",
  },

  title: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
    marginTop: 8,
  },

  time: {
    color: "#FFFFFF",
    fontSize: 52,
    fontWeight: "800",
    letterSpacing: 2,
    textAlign: "center",
    marginVertical: 24,
  },

  statusBox: {
    alignSelf: "center",
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#343943",
  },

  statusBoxRunning: {
    backgroundColor: "#183B29",
  },

  statusText: {
    color: "#C2C5CA",
    fontSize: 14,
    fontWeight: "700",
  },

  statusTextRunning: {
    color: "#55D98A",
  },
});
