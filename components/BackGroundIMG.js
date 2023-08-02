import { ImageBackground, Dimensions } from "react-native";

const BackGroundIMG = ({ children }) => {
  return (
    <ImageBackground
      resizeMode="cover"
      source={require("/Projects/AwesomeProject/Images/PhotoBG.jpg")}
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
      }}
    >
      {children}
    </ImageBackground>
  );
};

export default BackGroundIMG;
