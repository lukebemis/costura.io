package general;

import java.util.Scanner;

public class TabelasMedidas {
    public void exibirTabelas(Scanner scanner) {
        System.out.println("Selecione o tipo de roupa:");
        System.out.println("1 - Blusa");
        System.out.println("2 - Calça");
        System.out.println("3 - Vestido");
        int tipoRoupa = scanner.nextInt();

        switch (tipoRoupa) {
            case 1:
                exibirTabelaBlusas();
                break;
            case 2:
                exibirTabelaCalcas();
                break;
            case 3:
                exibirTabelaVestidos();
                break;
            default:
                System.out.println("Tipo de roupa inválido.");
                break;
        }
    }

    private void exibirTabelaBlusas() {
        System.out.println("Tabela de medidas para blusas:");
        System.out.println("Tamanho  | Busto (cm) | Cintura (cm) | Quadril (cm)");
        System.out.println("   P     |     86     |      66      |      91     ");
        System.out.println("   M     |     92     |      72      |      97     ");
        System.out.println("   G     |     98     |      78      |     103     ");
    }

    private void exibirTabelaCalcas() {
        System.out.println("Tabela de medidas para calças:");
        System.out.println("Tamanho  | Cintura (cm) | Quadril (cm)");
        System.out.println("   36    |      71      |      91     ");
        System.out.println("   38    |      75      |      95     ");
        System.out.println("   40    |      79      |      99     ");
    }

    private void exibirTabelaVestidos() {
        System.out.println("Tabela de medidas para vestidos:");
        System.out.println("Tamanho  | Busto (cm) | Cintura (cm) | Quadril (cm)");
        System.out.println("   P     |     86     |      66      |      91     ");
        System.out.println("   M     |     92     |      72      |      97     ");
        System.out.println("   G     |     98     |      78      |     103     ");
    }
}
