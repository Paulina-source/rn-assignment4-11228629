import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import JobCard from './JobCard';

const Home = ({ route }) => {
  const { name, email } = route.params;

  const popularJobs = [
    { id: 1, title: 'Software Engineer', company: 'Company A' },
    { id: 2, title: 'Product Manager', company: 'Company B' },
    { id: 3, title: 'Graphic Designer', company: 'Company C' },
    { id: 4, title: 'DevOps Engineer', company: 'Company D' },
    { id: 5, title: 'QA Engineer', company: 'Company E' },
    { id: 6, title: 'Backend Developer', company: 'Company F' },
    { id: 7, title: 'Mobile Developer', company: 'Company G' },
    { id: 8, title: 'Data Analyst', company: 'Company H' },
  ];

  const featuredJobs = [
    { id: 1, title: 'Data Scientist', company: 'Company I' },
    { id: 2, title: 'UI/UX Designer', company: 'Company J' },
    { id: 3, title: 'Front-End Developer', company: 'Company K' },
    { id: 4, title: 'Project Manager', company: 'Company L' },
    { id: 5, title: 'Technical Writer', company: 'Company M' },
    { id: 6, title: 'Marketing Specialist', company: 'Company N' },
    { id: 7, title: 'Product Owner', company: 'Company O' },
    { id: 8, title: 'IT Support', company: 'Company P' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.welcome}>Welcome, {name}!</Text>
      <Text style={styles.email}>{email}</Text>
      <Text style={styles.sectionTitle}>Popular Jobs</Text>
      {popularJobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
      <Text style={styles.sectionTitle}>Featured Jobs</Text>
      {featuredJobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  welcome: {
    fontSize: 24,
    marginBottom: 8,
  },
  email: {
    fontSize: 18,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    marginTop: 16,
    marginBottom: 8,
  },
});

export default Home;
