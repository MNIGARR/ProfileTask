import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';

const ProfileScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Posts');

  const posts = [
    { id: '1', header: 'Header', content: "He'll want to use your yacht, and I don't want this thing smelling like fish." },
    { id: '2', header: 'Header', content: "He'll want to use your yacht, and I don't want this thing smelling like fish." },
    { id: '3', header: 'Header', content: "He'll want to use your yacht, and I don't want this thing smelling like fish." },
  ];

  const renderItem = ({ item }: { item: { id: string, header: string, content: string } }) => (
    <View style={styles.postContainer}>
      <Text style={styles.postHeader}>{item.header}</Text>
      <Text style={styles.postContent}>{item.content}</Text>
    </View>
  );

  return (
    <SafeAreaView>
      <View style={styles.navBar}>
        <TouchableOpacity>
          <Text style={styles.navButton}>Settings</Text>
        </TouchableOpacity>
        <Text style={styles.navTitle}>Profile</Text>
        <TouchableOpacity>
          <Text style={styles.navButton}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.headerContainer}>
        <View style={styles.profileImageWrapper}>
          <Image
            style={styles.profileImage}
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjY-Fouo3pK1gMRTWONsA5pc04t9eqobi6DA&s' }}
          />
        </View>
      </View>

      <View style={styles.profileInfoContainer}>
        <Text style={styles.profileName}>Victoria Robertson</Text>
        <Text style={styles.profileMantra}>A mantra goes here</Text>
      </View>

      {/* Tab Bar */}
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => setActiveTab('Posts')} style={[styles.tab, activeTab === 'Posts' && styles.activeTab]}>
          <Text style={[styles.tabText, activeTab === 'Posts' && styles.activeTabText]}>Posts</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Photos')} style={[styles.tab, activeTab === 'Photos' && styles.activeTab]}>
          <Text style={[styles.tabText, activeTab === 'Photos' && styles.activeTabText]}>Photos</Text>
        </TouchableOpacity>
      </View>

      {/* Content Section */}
      {activeTab === 'Posts' ? (
        <FlatList
          data={posts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.postsList}
        />
      ) : (
        <View style={styles.noContentContainer}>
          <Text style={styles.noContentText}>No photos available</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#66BB6A',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  navButton: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '500'
  },
  navTitle: {
    fontSize: 30,
    fontWeight: '600',
    color: '#FFF',
  },
  headerContainer: {
    backgroundColor: '#66BB6A',
    height: 150, 
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  profileImageWrapper: {
    position: 'absolute',
    bottom: -50
  },
  profileImage: {
    width: 158,
    height: 158,
    borderRadius: 80,
    borderWidth: 4,
    borderColor: '#FFF',
  },
  profileInfoContainer: {
    alignItems: 'center',
    marginTop: 60
  },
  profileName: {
    fontSize: 30,
    fontWeight: '600',
    marginTop: 10,
  },
  profileMantra: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 5,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFF',
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 1,
    marginTop: 20,
  },
  tab: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  tabText: {
    fontSize: 16,
    color: '#757575',
  },
  activeTab: {
    borderBottomWidth: 3,
    borderColor: '#66BB6A',
  },
  activeTabText: {
    color: '#66BB6A',
    fontWeight: '600',
  },
  postsList: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  postContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  postHeader: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  postContent: {
    fontSize: 14,
    color: '#757575',
  },
  noContentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  noContentText: {
    fontSize: 18,
    color: '#757575',
  },
});

export default ProfileScreen;
