import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const Dashboard = () => {
  return (
    <Container className="flex flex-col h-screen justify-center items-center">
      <SectionTitle
        title="Welcome to your Dashboard"
        details="Select an option from the sidebar to get started."
      />
    </Container>
  );
};

export default Dashboard;
