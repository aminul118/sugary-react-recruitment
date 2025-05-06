import { useAuth } from "@/providers/AuthContext";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Container from "@/components/ui/Container";

const UserProfile = () => {
  const { user } = useAuth();
  const imgUrl = import.meta.env.VITE_IMAGE_URL as string;

  if (!user) return null;

  return (
    <Container className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-3xl mx-auto">
        <Card className="p-4 sm:p-6 shadow-md">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
            <Avatar className="w-24 h-24">
              <AvatarImage
                src={`${imgUrl}/${user?.Avatar}`}
                alt={user?.FullName}
              />
              <AvatarFallback>
                {user?.FirstName?.[0]}
                {user?.LastName?.[0]}
              </AvatarFallback>
            </Avatar>

            <div className="text-center sm:text-left">
              <h2 className="text-xl sm:text-2xl font-semibold">
                {user?.FullName}
              </h2>
              <p className="text-sm text-muted-foreground">{user?.Email}</p>
              {user?.Role?.Title && (
                <Badge className="mt-2 inline-block">{user?.Role?.Title}</Badge>
              )}
            </div>
          </div>

          <CardContent className="mt-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Info label="Username" value={user?.Username} />
              <Info label="Phone" value={user?.PhoneNumber || "Not provided"} />
              <Info
                label="Country"
                value={user?.GiftingCountry?.Name || "Not set"}
              />
              <Info
                label="Currency"
                value={`${user?.Currency?.Symbol} - ${user.Currency?.Id}`}
              />
              <Info
                label="Email Confirmed"
                value={user?.EmailConfirmed ? "Yes" : "No"}
              />
              <Info
                label="Onboarding"
                value={user?.OnBoardCompleted ? "Complete" : "Incomplete"}
              />
              <Info
                label="Profile Completion"
                value={`${user?.ProfileCompletePercent}%`}
              />
              <Info
                label="Minimum App Version"
                value={user?.MinimumVersion || "N/A"}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
};

const Info = ({ label, value }: { label: string; value: string | number }) => (
  <div>
    <p className="text-xs sm:text-sm text-muted-foreground">{label}</p>
    <p className="text-sm sm:text-base font-medium break-words">{value}</p>
  </div>
);

export default UserProfile;
