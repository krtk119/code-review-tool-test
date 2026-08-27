interface UserBioProps {
  displayName: string;
  bioHtml: string;
}

export function UserBio({ displayName, bioHtml }: UserBioProps) {
  return (
    <div className="profile-card">
      <h2>{displayName}</h2>
      <div dangerouslySetInnerHTML={{ __html: bioHtml }} />
    </div>
  );
}
