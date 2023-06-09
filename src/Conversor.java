package general;

import java.util.Scanner;

public class Conversor {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int opcao = 0;
        do {
            exibirMenuPrincipal();
            opcao = scanner.nextInt();

            switch (opcao) {
                case 1:
                    ConversorMedidasRoupa conversorMedidasRoupa = new ConversorMedidasRoupa();
                    conversorMedidasRoupa.converterMedidas(scanner);
                    break;
                case 2:
                    ConversorUnidadesMedida conversorUnidadesMedida = new ConversorUnidadesMedida();
                    conversorUnidadesMedida.converterUnidades(scanner);
                    break;
                case 3:
                    TabelasMedidas tabelasMedidas = new TabelasMedidas();
                    tabelasMedidas.exibirTabelas(scanner);
                    break;
                case 4:
                    HistoricoMedidas historicoMedidas = new HistoricoMedidas();
                    historicoMedidas.exibirHistorico(scanner);
                    break;
                case 0:
                    System.out.println("Saindo do programa...");
                    break;
                default:
                    System.out.println("Opção inválida. Por favor, escolha uma opção válida.");
                    break;
            }
        } while (opcao != 0);
    }

    private static void exibirMenuPrincipal() {
        System.out.println("Selecione a opção desejada:");
        System.out.println("1 - Conversão de medidas de roupa para medidas do corpo");
        System.out.println("2 - Conversão de medidas em diferentes unidades de medida");
        System.out.println("3 - Visualização de tabelas de medidas");
        System.out.println("4 - Histórico de medidas");
        System.out.println("0 - Sair do programa");
    }
}
