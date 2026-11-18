import { Slot, usePathname, useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function MahasiswaTopTabsLayoutWeb() {
  const router = useRouter();
  const pathname = usePathname();

  const tabs = [
    { name: "Data", route: "/mahasiswa" },
    { name: "Input", route: "/mahasiswa/input" },
    { name: "Report", route: "/mahasiswa/report" },
  ];

  return (
    <View style={styles.container}>
      {/* Tab Bar Atas */}
      <View style={styles.tabBar}>
        {tabs.map((tab) => {
          const isActive =
            tab.route === "/mahasiswa"
              ? pathname === "/mahasiswa" || pathname === "/mahasiswa/index"
              : pathname === tab.route;
          return (
            <TouchableOpacity
              key={tab.route}
              style={styles.tabItem}
              onPress={() => router.push(tab.route as any)}
            >
              <Text style={[styles.tabLabel, isActive && styles.tabLabelActive]}>
                {tab.name}
              </Text>
              {isActive && <View style={styles.indicator} />}
            </TouchableOpacity>
          );
        })}
      </View>
      {/* Konten Tab */}
      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  tabBar: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    elevation: 2,
    shadowOpacity: 0.08,
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 12,
  },
  tabLabel: {
    fontSize: 13,
    fontWeight: "600",
    color: "#64748b",
  },
  tabLabelActive: {
    color: "#072deb",
  },
  indicator: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 3,
    backgroundColor: "#072deb",
  },
});
