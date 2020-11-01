export type Props = {
  image: string,
  link: string
}

type ChangeTextType = { newText: string }

export default class ImageLink implements IScript<Props> {
  init() {}

  spawn(host: Entity, props: Props, channel: IChannel) {
    const entity = new Entity()
    const imageTexture = new Texture(props.image)
    const imageMaterial = new Material()
    
    imageMaterial.metallic = 0
    imageMaterial.roughness = 1
    imageMaterial.specularIntensity = 0
    imageMaterial.albedoTexture = imageTexture

    entity.setParent(host)
    entity.addComponent(new Transform({}))

    let plane = new Entity()
    plane.setParent(host)
    plane.addComponent(new PlaneShape())
    plane.addComponent(imageMaterial)
    plane.addComponent(
      new Transform({
        position: new Vector3(0, 0.5, 0),
        rotation: Quaternion.Euler(180, 0, 0),
        scale: new Vector3(1, 1, 1),
      })
    );
    plane.addComponent(
      new OnPointerDown(() => {
        openExternalURL(props.link)
      })
    )
  }
}
