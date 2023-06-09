package general;

import java.util.Scanner;

public class ConversorUnidadesMedida {
    public void converterUnidades(Scanner scanner) {
        System.out.println("Digite a medida a ser convertida:");
        double medida = scanner.nextDouble();
        System.out.println("Selecione a unidade de medida atual:");
        System.out.println("1 - Centímetros");
        System.out.println("2 - Polegadas");
        System.out.println("3 - Jardas");
        int unidadeAtual = scanner.nextInt();
        System.out.println("Selecione a unidade de medida desejada:");
        System.out.println("1 - Centímetros");
        System.out.println("2 - Polegadas");
        System.out.println("3 - Jardas");
        int unidadeDesejada = scanner.nextInt();
        double medidaConvertida = 0;

        switch (unidadeAtual) {
            case 1:
                medidaConvertida = converterCentimetros(medida, unidadeDesejada);
                break;
            case 2:
                medidaConvertida = converterPolegadas(medida, unidadeDesejada);
                break;
            case 3:
                medidaConvertida = converterJardas(medida, unidadeDesejada);
                break;
            default:
                System.out.println("Unidade de medida inválida.");
                break;
        }

        System.out.println("Medida convertida: " + medidaConvertida);
    }

    private double converterCentimetros(double medida, int unidadeDesejada) {
        switch (unidadeDesejada) {
            case 1:
                return medida;
            case 2:
                return medida / 2.54;
            case 3:
                return medida / 91.44;
            default:
                System.out.println("Unidade de medida inválida.");
                return 0;
        }
    }

    private double converterPolegadas(double medida, int unidadeDesejada) {
        switch (unidadeDesejada) {
            case 1:
                return medida * 2.54;
            case 2:
                return medida;
            case 3:
                return medida / 36;
            default:
                System.out.println("Unidade de medida inválida.");
                return 0;
        }
    }

    private double converterJardas(double medida, int unidadeDesejada) {
        switch (unidadeDesejada) {
            case 1:
                return medida * 91.44;
            case 2:
                return medida * 36;
            case 3:
                return medida;
            default:
                System.out.println("Unidade de medida inválida.");
                return 0;
        }
    }
}
