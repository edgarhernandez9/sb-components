import './myLabel.css';

export interface MyLabelProps {
    /**
     * Este es el mensaje a mostrar en la etiqueta
     */
    label: string;
    /**
     * Este es el size de las etiquetas
     */
    size: 'normal'|'h1'|'h2'|'h3';

    /**
     * Si quiere todo capitalizado
     */
    allCaps?: boolean;

    /**
     * Colores basicos de la etiqueta
     */
    color?: 'primary' | 'secondary' | 'tertiary';

    /**
     * Color personalizado de la fuente
     */
    fontColor?: string;
}

export const MyLabel = ({ 
    label = 'No Label', 
    size = 'normal', 
    allCaps= false, 
    color = 'primary',
    fontColor
}: MyLabelProps) => {

    return (
        <span 
            className={ ` label ${ size }  text-${ color } `  }
            style={{ color: fontColor }}
        >
            { allCaps ? label.toUpperCase() : label }
        </span>
    )
}