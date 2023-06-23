import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Label;
import javafx.scene.layout.StackPane;
import javafx.stage.Stage;

public class ap extends Application {
    public void start(Stage primaryStage) {
        Label label = new Label("Hello World");
        StackPane root = new StackPane(label);
        Scene scene = new Scene(root, 200, 100);
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}
