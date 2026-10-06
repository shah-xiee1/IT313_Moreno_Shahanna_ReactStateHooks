import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type PracticeTrackerProps = {
  solved: number;
  onSolve: () => void;
  onReset: () => void;
};

export default function PracticeTracker({
  solved,
  onSolve,
  onReset,
}: PracticeTrackerProps) {
  const progress = Math.min(solved / 5, 1);

  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <View>
          <Text style={styles.label}>PRACTICE PROGRESS</Text>
          <Text style={styles.heading}>Problems Solved</Text>
        </View>

        <View style={styles.countCircle}>
          <Text style={styles.countText}>{solved}</Text>
        </View>
      </View>

      <View style={styles.progressBackground}>
        <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
      </View>

      <Text style={styles.progressText}>{solved} of 5 completed</Text>

      {solved >= 5 && (
        <View style={styles.successBox}>
          <Text style={styles.successTitle}>Great job!</Text>
          <Text style={styles.successText}>
            You reached your practice goal.
          </Text>
        </View>
      )}

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.solveButton} onPress={onSolve}>
          <Text style={styles.solveButtonText}>+ Solve Problem</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.resetButton} onPress={onReset}>
          <Text style={styles.resetButtonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 22,
    marginBottom: 18,
    elevation: 4,
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  label: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1,
    color: "#777777",
    marginBottom: 5,
  },

  heading: {
    fontSize: 21,
    fontWeight: "800",
    color: "#222222",
  },

  countCircle: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: "#E8F1FF",
    justifyContent: "center",
    alignItems: "center",
  },

  countText: {
    fontSize: 22,
    fontWeight: "800",
    color: "#2F6FED",
  },

  progressBackground: {
    height: 9,
    width: "100%",
    backgroundColor: "#E9E9E9",
    borderRadius: 10,
    marginTop: 22,
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    backgroundColor: "#2F6FED",
    borderRadius: 10,
  },

  progressText: {
    fontSize: 13,
    color: "#777777",
    marginTop: 8,
  },

  successBox: {
    marginTop: 16,
    padding: 14,
    borderRadius: 15,
    backgroundColor: "#EAF8EF",
  },

  successTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: "#238B45",
  },

  successText: {
    fontSize: 13,
    color: "#4C7358",
    marginTop: 3,
  },

  buttonRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
  },

  solveButton: {
    flex: 1,
    backgroundColor: "#2F6FED",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
  },

  solveButtonText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 14,
  },

  resetButton: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 14,
    backgroundColor: "#F1F1F1",
    alignItems: "center",
    justifyContent: "center",
  },

  resetButtonText: {
    color: "#555555",
    fontWeight: "700",
    fontSize: 14,
  },
});
