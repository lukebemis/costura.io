package general;

import java.util.Scanner;

public class ConversorMedidasRoupa {
    public void converterMedidas(Scanner scanner) {
        System.out.println("Digite a medida da roupa em centímetros:");
        double medidaRoupa = scanner.nextDouble();
        double medidaBusto = medidaRoupa * 2;
        double medidaCintura = medidaRoupa * 1.5;
        double medidaQuadril = medidaRoupa * 2.5;
        System.out.println("Medida do busto: " + medidaBusto + " cm");
        System.out.println("Medida da cintura: " + medidaCintura + " cm");
        System.out.println("Medida do quadril: " + medidaQuadril + " cm");
    }
}
