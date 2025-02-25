import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function FooterAppBar() {
  return (
    <footer className="bg-[#23234d] py-4 text-center w-full flex justify-center">
      <Typography variant="body2" color="white" className="flex items-center">
        &copy; Made with{" "}
        <FavoriteIcon
          sx={{
            color: "#fa8cf6",
            mx: 1,
            fontSize: "30px",
          }}
        />{" "}
        by Yan
      </Typography>
    </footer>
  );
}
