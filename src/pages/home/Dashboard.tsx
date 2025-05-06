import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { useAuth } from "@/providers/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();
  console.log(user);
  const userName = user?.FullName;
  return (
    <Container className="flex flex-col h-screen justify-center items-center">
      <SectionTitle
        title={`Welcome ${userName}`}
        details="Select an option from the sidebar to get started."
      />
    </Container>
  );
};

export default Dashboard;
